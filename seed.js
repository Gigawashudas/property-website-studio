require('dotenv').config();

const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: '17fkvbdc',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
});

// --------------------------------------------------
// IMAGE POOL
// --------------------------------------------------

const imagePool = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',

    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',

    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607688960-e095ff83135c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687920-d9a6c7f1a4f8?q=80&w=1200',

    'https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566752227-8f3c6b7f0c5e?q=80&w=1200',

    'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200',
];

// --------------------------------------------------
// DATA
// --------------------------------------------------

const locations = [
    'Gulshan, Dhaka',
    'Banani, Dhaka',
    'Baridhara, Dhaka',
    'Dhanmondi, Dhaka',
    'Uttara, Dhaka',
    'Bashundhara, Dhaka',
    'Mirpur, Dhaka',
    'Mohammadpur, Dhaka',
    'Badda, Dhaka',
    'Khilgaon, Dhaka',
    'Wari, Dhaka',
    'Lalmatia, Dhaka',
    'Tejgaon, Dhaka',
    'Shyamoli, Dhaka',
    'Niketan, Dhaka',
    'Aftab Nagar, Dhaka',
    'Purbachal, Dhaka',
    'Savar, Dhaka',
    'Keraniganj, Dhaka',
    'Tongi, Dhaka',
];

const propertyTypes = [
    'Apartment',
    'House',
    'Villa',
    'Land',
    'Commercial',
];

const listingTypes = [
    'For Sale',
    'For Rent',
];

const apartmentTitles = [
    'Modern Luxury Apartment',
    'Spacious Family Apartment',
    'Contemporary City Apartment',
    'Premium Residential Apartment',
    'Elegant Corner Apartment',
    'High-Rise City View Apartment',
    'Bright and Airy Apartment',
    'Newly Built Apartment',
    'Executive Apartment',
    'Fully Furnished Apartment',
    'Modern Family Flat',
    'Luxury 3 Bedroom Flat',
];

const houseTitles = [
    'Spacious Family House',
    'Modern Family Home',
    'Beautiful Independent House',
    'Quiet Residential House',
    'Renovated Family House',
    'Large Modern House',
    'Contemporary Family Home',
    'Peaceful Suburban House',
];

const villaTitles = [
    'Luxury Villa with Garden',
    'Modern Private Villa',
    'Elegant Family Villa',
    'Premium Garden Villa',
    'Contemporary Luxury Villa',
    'Private Pool Villa',
    'Spacious Duplex Villa',
    'Exclusive Residential Villa',
];

const landTitles = [
    'Residential Plot of Land',
    'Prime Residential Land',
    'Corner Plot',
    'Premium Development Land',
    'Ready Residential Plot',
    'Investment Land',
    'Main Road Facing Plot',
    'Large Residential Plot',
];

const commercialTitles = [
    'Modern Commercial Office',
    'Prime Office Space',
    'Executive Commercial Space',
    'Retail Shop Space',
    'Premium Business Office',
    'Commercial Building Floor',
    'City Center Office',
    'Corporate Office Space',
];

// --------------------------------------------------
// HELPERS
// --------------------------------------------------

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function getTitle(propertyType) {
    switch (propertyType) {
        case 'Apartment':
            return randomItem(apartmentTitles);

        case 'House':
            return randomItem(houseTitles);

        case 'Villa':
            return randomItem(villaTitles);

        case 'Land':
            return randomItem(landTitles);

        case 'Commercial':
            return randomItem(commercialTitles);

        default:
            return 'Modern Property';
    }
}

function getPrice(propertyType, listingType) {
    if (listingType === 'For Rent') {
        switch (propertyType) {
            case 'Apartment':
                return randomNumber(25000, 150000);

            case 'House':
                return randomNumber(40000, 180000);

            case 'Villa':
                return randomNumber(80000, 300000);

            case 'Commercial':
                return randomNumber(30000, 250000);

            case 'Land':
                return randomNumber(20000, 100000);

            default:
                return randomNumber(20000, 100000);
        }
    }

    switch (propertyType) {
        case 'Apartment':
            return randomNumber(4500000, 35000000);

        case 'House':
            return randomNumber(8000000, 60000000);

        case 'Villa':
            return randomNumber(15000000, 100000000);

        case 'Land':
            return randomNumber(3000000, 80000000);

        case 'Commercial':
            return randomNumber(10000000, 120000000);

        default:
            return randomNumber(5000000, 30000000);
    }
}

function getBedrooms(propertyType) {
    if (propertyType === 'Land') {
        return 0;
    }

    if (propertyType === 'Commercial') {
        return 0;
    }

    if (propertyType === 'Villa') {
        return randomNumber(3, 7);
    }

    if (propertyType === 'House') {
        return randomNumber(2, 6);
    }

    return randomNumber(1, 5);
}

function getBathrooms(propertyType) {
    if (propertyType === 'Land') {
        return 0;
    }

    if (propertyType === 'Commercial') {
        return 2;
    }

    return randomNumber(1, 5);
}

function getArea(propertyType) {
    switch (propertyType) {
        case 'Apartment':
            return randomNumber(700, 3500);

        case 'House':
            return randomNumber(1200, 6000);

        case 'Villa':
            return randomNumber(2500, 10000);

        case 'Land':
            return randomNumber(1200, 15000);

        case 'Commercial':
            return randomNumber(800, 10000);

        default:
            return randomNumber(800, 3000);
    }
}

// --------------------------------------------------
// UPLOAD IMAGE
// --------------------------------------------------

async function uploadImageFromUrl(url, index) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(
            `Failed to download image: ${url}`
        );
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const asset = await client.assets.upload(
        'image',
        buffer,
        {
            filename: `property-image-${index}.jpg`,
        }
    );

    return {
        _type: 'image',
        asset: {
            _type: 'reference',
            _ref: asset._id,
        },
    };
}

// --------------------------------------------------
// MAIN SEED
// --------------------------------------------------

async function seed() {
    console.log('');
    console.log('========================================');
    console.log(' PRIMEESTATE PROPERTY SEED');
    console.log('========================================');
    console.log('');

    // ----------------------------------------------
    // Upload images
    // ----------------------------------------------

    console.log(
        `Uploading ${imagePool.length} property images...`
    );

    const uploadedImages = [];

    for (let i = 0; i < imagePool.length; i++) {
        try {
            const image = await uploadImageFromUrl(
                imagePool[i],
                i + 1
            );

            uploadedImages.push(image);

            console.log(
                `Image ${i + 1}/${imagePool.length} uploaded`
            );
        } catch (error) {
            console.error(
                `Image ${i + 1} failed:`,
                error.message
            );
        }
    }

    if (uploadedImages.length === 0) {
        throw new Error(
            'No images were uploaded. Stopping seed.'
        );
    }

    console.log('');
    console.log(
        `${uploadedImages.length} images available.`
    );

    // ----------------------------------------------
    // Create 100 additional properties
    // ----------------------------------------------

    const TOTAL_NEW_PROPERTIES = 100;
    const START_NUMBER = 21;

    console.log('');
    console.log(
        `Creating ${TOTAL_NEW_PROPERTIES} new properties...`
    );
    console.log('');

    for (
        let i = 0;
        i < TOTAL_NEW_PROPERTIES;
        i++
    ) {
        const propertyNumber = START_NUMBER + i;

        const propertyType = randomItem(
            propertyTypes
        );

        const listingType = randomItem(
            listingTypes
        );

        const location = randomItem(
            locations
        );

        const baseTitle = getTitle(
            propertyType
        );

        const title = baseTitle;

        const price = getPrice(
            propertyType,
            listingType
        );

        const bedrooms = getBedrooms(
            propertyType
        );

        const bathrooms = getBathrooms(
            propertyType
        );

        const area = getArea(
            propertyType
        );

        // ------------------------------------------
        // Pick 4-8 images
        // ------------------------------------------

        const shuffledImages = [
            ...uploadedImages,
        ].sort(() => Math.random() - 0.5);

        const imageCount = randomNumber(4, 8);

        const images = shuffledImages.slice(
            0,
            Math.min(
                imageCount,
                shuffledImages.length
            )
        );

        // ------------------------------------------
        // Description
        // ------------------------------------------

        const description =
            `A beautiful ${propertyType.toLowerCase()} ` +
            `located in ${location}. This property ` +
            `offers excellent space, modern features, ` +
            `and convenient access to nearby roads, ` +
            `shopping areas, schools, restaurants, and ` +
            `other essential facilities. ` +
            `Whether you are looking for a comfortable ` +
            `home or a valuable investment opportunity, ` +
            `this property is worth considering.`;

        // ------------------------------------------
        // Document
        // ------------------------------------------

        const doc = {
            _type: 'property',

            title,

            listingType,

            propertyType,

            price,

            location,

            bedrooms,

            bathrooms,

            area,

            description,

            images,

            featured: i % 10 === 0,

            slug: {
                _type: 'slug',
                current: `${slugify(
                    baseTitle
                )}-${propertyNumber}`,
            },
        };

        try {
            await client.create(doc);

            console.log(
                `✓ ${propertyNumber}/120 - ${title} | ${listingType} | ${propertyType} | ৳${price.toLocaleString()}`
            );
        } catch (error) {
            console.error(
                `✗ Failed: ${title}`,
                error.message
            );
        }
    }

    console.log('');
    console.log('========================================');
    console.log(' DONE');
    console.log('========================================');
    console.log(
        '100 new properties have been added.'
    );
    console.log(
        'You should now have approximately 120 properties total.'
    );
    console.log('');
}

seed().catch((err) => {
    console.error('');
    console.error('SEED FAILED');
    console.error(err);
    process.exit(1);
});