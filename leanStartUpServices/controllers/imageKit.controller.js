import ImageKit from ('imagekit')

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

exports.imageKitAuth = async (req, res) =>{
    const authParams = imageKit.getAuthenticationParameters();
    res.json(authParams);
}