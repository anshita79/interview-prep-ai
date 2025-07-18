const multer = require('multer');

//Configure storage
const storage = multer.diskStorage({
    destination: (req , File , cb) =>{
        cb(null, 'uploads/');
    },
    filename: (req, File,cb) =>{
        cb(null, `${Date.now()}-${File.originalname}`);
    },
});

//File filter
const fileFilter = (req , File , cb) => {
    const allowedTypes = ['image/jpeg','image/png','image/jpg'];
    if (allowedTypes.includes(File.mimetype)){
        cb(null, true);
    } else{
        cb(new Error('Only . jpeg  .jpg  .png  formats are allowed'), false);
    }
};

const upload = multer({ storage, fileFilter});

module.exports = upload;