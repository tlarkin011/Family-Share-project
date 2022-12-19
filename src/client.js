import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "nx950uzj",
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: "sk8r6xsmYlTmSiMqbF7YZM1yM6Yuox1712lpABLYWRnx1GIHBShhZwgWDuJCXbcA2D7U3NvkMTwIBpue2jCUgGgXwFhgRAKh5S6cCKbE0uS96SIA2u5W5KBJuOtxp01FeN2uv7OKbJMyVn1h3NK93QKQl30r0Iyob6SWkjJ27kL1uAgZybmk",
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);