require('dotenv').config();

const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: '17fkvbdc',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
});

async function renameProperties() {
    const properties = await client.fetch(`
        *[_type == "property"]{
            _id,
            title,
            propertyType
        }
    `);

    console.log(`Found ${properties.length} properties.`);

    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];

        // Remove "#number" from the end
        const newTitle = property.title.replace(/\s*#\d+\s*$/, '');

        if (newTitle === property.title) {
            console.log(`Skipped: ${property.title}`);
            continue;
        }

        await client
            .patch(property._id)
            .set({
                title: newTitle,
            })
            .commit();

        console.log(
            `Renamed: "${property.title}" → "${newTitle}"`
        );
    }

    console.log('Done!');
}

renameProperties().catch((error) => {
    console.error('Rename failed:', error);
    process.exit(1);
});