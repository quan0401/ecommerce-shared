import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';

export const uploads = (
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean,
  folder?: string
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> =>
  new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto', // zip, images
        folder,
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });

export const uploads_video = (
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean,
  folder?: string
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> =>
  new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'video', // zip, images
        chunk_size: 50000,
        folder,
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
