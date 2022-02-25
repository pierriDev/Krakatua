export const useCamera = () => {
    const takePicture = async () => {
        // if (camera) {
        //   const options = { quality: 0.5, base64: true };
        //   const data = await camera.takePictureAsync(options);
        //   console.log(data.uri);
        // }
        console.log("Tirar Foto")
    };

    return {
        takePicture
    }
}