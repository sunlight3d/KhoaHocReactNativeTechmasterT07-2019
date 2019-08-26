const SERVER_PORT = 3000
const SERVER_NAME = "127.0.0.1"
const urlUploadPhoto = `http://${SERVER_NAME}:${SERVER_PORT}/products/uploads`
const urlGetPhoto = (imageName) => 
    `http://${SERVER_NAME}:${SERVER_PORT}/getImage?fileName=${imageName}`
    
export {
    urlUploadPhoto,
    urlGetPhoto
}