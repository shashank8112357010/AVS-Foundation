import { publicRequest } from './axiosReqMethods';

export const createUser = async (user) => {
    return publicRequest.post(`user/createuser`, user)
}

export const loginUser = async (user) => {
    return publicRequest.post(`user/signuser`, user)
}

export const forgotPasswordUser = async (user) => {
    return publicRequest.post(`user/resetpassword`, user)
}



// products ===>
export const getProducts = async () => {
    return publicRequest.get(`product/getproducts`)
}


export const getProductsById = async (id) => {
    return publicRequest.get(`product/getproducts/${id}`)
}



// referral link and qr =>

export const getReferralLink = async (phone) => {
    return publicRequest.get(`user/getinvitationlink/${phone}`)
}

export const getQRCode = async (phone) => {
    return publicRequest.get(`user/getQRCode/${phone}`)
}


