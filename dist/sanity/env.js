export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';
export const dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', );
export const projectId = assertValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h0ftj8xn', );

function assertValue(v, errorMessage) {
    if (!v) {
        throw new Error(errorMessage);
    }
    return v;
}
