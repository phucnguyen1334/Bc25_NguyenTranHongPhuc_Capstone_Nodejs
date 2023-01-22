/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *      description: responses
 *      tags: [Auth]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             phone:
 *               type: string
 *             birthday:
 *               type: string
 *             gender:
 *               type: string
 *             role:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *      description: responses
 *      tags: [Auth]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/binh-luan:
 *  get:
 *      description: responses
 *      tags: [BinhLuan]
 *      responses:
 *          200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/binh-luan:
 *  post:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             maPhong:
 *               type: number
 *             maNguoiBinhLuan:
 *               type: number
 *             ngayBinhLuan:
 *               type: string
 *             noiDung:
 *               type: string
 *             saoBinhLuan:
 *               type: number
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/binh-luan/{id}:
 *  put:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             maPhong:
 *               type: number
 *             maNguoiBinhLuan:
 *               type: number
 *             ngayBinhLuan:
 *               type: string
 *             noiDung:
 *               type: string
 *             saoBinhLuan:
 *               type: number
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/binh-luan/{id}:
 *  delete:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/binh-luan/lay-binh-luan-theo-phong/{MaPhong}:
 *  get:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: path
 *        name: MaPhong
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/dat-phong:
 *  get:
 *      description: responses
 *      tags: [DatPhong]
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/dat-phong:
 *  post:
 *      description: responses
 *      tags: [DatPhong]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             maPhong:
 *               type: number
 *             ngayDen:
 *               type: date
 *             ngayDi:
 *               type: date
 *             soLuongKhach:
 *               type: number
 *             maNguoiDung:
 *               type: number
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/dat-phong/{id}:
 *  get:
 *      description: responses
 *      tags: [DatPhong]
 *      parameters:
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/dat-phong/{id}:
 *  put:
 *      description: responses
 *      tags: [DatPhong]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             maPhong:
 *               type: number
 *             ngayDen:
 *               type: date
 *             ngayDi:
 *               type: date
 *             soLuongKhach:
 *               type: number
 *             maNguoiDung:
 *               type: number
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/dat-phong/{id}:
 *  delete:
 *      description: responses
 *      tags: [DatPhong]
 *      parameters:
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/dat-phong/lay-theo-nguoi-dung/{MaNguoiDung}:
 *  get:
 *      description: responses
 *      tags: [DatPhong]
 *      parameters:
 *      - in: path
 *        name: MaNguoiDung
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             phone:
 *               type: string
 *             birthday:
 *               type: string
 *             gender:
 *               type: string
 *             role:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/users:
 *  delete:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: query
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             phone:
 *               type: string
 *             birthday:
 *               type: string
 *             gender:
 *               type: string
 *             role:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/users/search/{TenNguoiDung}:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: TenNguoiDung
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/users/upload-avatar:
 *  post:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: formData
 *        name: formFile
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/phong-thue:
 *  get:
 *      description: responses
 *      tags: [Phong]
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/phong-thue:
 *  post:
 *      description: responses
 *      tags: [Phong]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             tenPhong:
 *               type: string
 *             khach:
 *               type: number
 *             phongNgu:
 *               type: number
 *             giuong:
 *               type: number
 *             phongTam:
 *               type: number
 *             moTa:
 *               type: string
 *             giaTien:
 *               type: number
 *             mayGiat:
 *               type: boolean
 *             banLa:
 *               type: boolean
 *             tivi:
 *               type: boolean
 *             dieuHoa:
 *               type: boolean
 *             wifi:
 *               type: boolean
 *             bep:
 *               type: boolean
 *             doXe:
 *               type: boolean
 *             hoBoi:
 *               type: boolean
 *             banUi:
 *               type: boolean
 *             maViTri:
 *               type: number
 *             hinhAnh:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/phong-thue/lay-phong-theo-vi-tri:
 *  delete:
 *      description: responses
 *      tags: [Phong]
 *      parameters:
 *      - in: query
 *        name: maViTri
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/phong-thue/{id}:
 *  get:
 *      description: responses
 *      tags: [Phong]
 *      parameters:
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/phong-thue/{id}:
 *  put:
 *      description: responses
 *      tags: [Phong]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             tenPhong:
 *               type: string
 *             khach:
 *               type: number
 *             phongNgu:
 *               type: number
 *             giuong:
 *               type: number
 *             phongTam:
 *               type: number
 *             moTa:
 *               type: string
 *             giaTien:
 *               type: number
 *             mayGiat:
 *               type: boolean
 *             banLa:
 *               type: boolean
 *             tivi:
 *               type: boolean
 *             dieuHoa:
 *               type: boolean
 *             wifi:
 *               type: boolean
 *             bep:
 *               type: boolean
 *             doXe:
 *               type: boolean
 *             hoBoi:
 *               type: boolean
 *             banUi:
 *               type: boolean
 *             maViTri:
 *               type: number
 *             hinhAnh:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/phong-thue/{id}:
 *  delete:
 *      description: responses
 *      tags: [Phong]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/phong-thue/upload-hinh-phong:
 *  post:
 *      description: responses
 *      tags: [Phong]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: query
 *        name: maPhong
 *      - in: formData
 *        name: formFile
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/vi-tri:
 *  get:
 *      description: responses
 *      tags: [ViTri]
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/vi-tri:
 *  post:
 *      description: responses
 *      tags: [ViTri]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             tenViTri:
 *               type: string
 *             tinhThanh:
 *               type: string
 *             quocGia:
 *               type: string
 *             hinhAnh:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/vi-tri/{id}:
 *  get:
 *      description: responses
 *      tags: [ViTri]
 *      parameters:
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/vi-tri/{id}:
 *  put:
 *      description: responses
 *      tags: [ViTri]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             tenViTri:
 *               type: string
 *             tinhThanh:
 *               type: string
 *             quocGia:
 *               type: string
 *             hinhAnh:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/vi-tri/{id}:
 *  delete:
 *      description: responses
 *      tags: [ViTri]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *      responses:
 *          200: 
 *              description: res   
 */

/**
 * @swagger
 * /api/vi-tri/upload-hinh-vitri:
 *  post:
 *      description: responses
 *      tags: [ViTri]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: query
 *        name: maViTri
 *      - in: formData
 *        name: formFile
 *      responses:
 *          200: 
 *              description: res   
 */