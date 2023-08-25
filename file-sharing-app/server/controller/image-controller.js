import generateSignedUrl from '../s3.js';

export const imageController = async (request, response) => {
    const url = await generateSignedUrl();
    response.status(200).json({ url })
}