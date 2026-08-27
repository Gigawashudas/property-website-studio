export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
            name: 'listingType',
            title: 'Listing Type',
            type: 'string',
            options: { list: ['For Sale', 'For Rent'] },
        },
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: { list: ['Apartment', 'House', 'Villa', 'Land', 'Commercial'] },
        },
        { name: 'price', title: 'Price', type: 'number' },
        { name: 'location', title: 'Location', type: 'string' },
        { name: 'bedrooms', title: 'Bedrooms', type: 'number' },
        { name: 'bathrooms', title: 'Bathrooms', type: 'number' },
        { name: 'area', title: 'Area (sq ft)', type: 'number' },
        { name: 'description', title: 'Description', type: 'text' },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
        { name: 'featured', title: 'Featured', type: 'boolean' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    ],
};