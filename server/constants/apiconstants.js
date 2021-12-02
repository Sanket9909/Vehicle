const version ="v1";

module.exports=Object.freeze({
/**
 * customer
 */
API_POST_customer:`/api/customer`,
API_GET_customer:`/api/customer`,
API_GET_customerBYID:`/api/customer/:customerId`,
API_DELETE_customerBYID:'/api/customer/:customerId',
API_PUT_customerBYID:'/api/customer/:customerId',

/**
 * service model
 */
API_POST_service:`/api/service`,
API_GET_service:`/api/service`,
API_GET_serviceBYID:`/api/service/:serviceId`,
API_PUT_serviceBYID:`/api/service/:serviceId`,
API_PUT_serviceBYNAME:`/api/service/:serviceName`,
API_DELETE_serviceBYID:`/api/service/:serviceId`,
API_GET_servicelisting:`/api/servicelist`,

/**
 * auth
 */

API_POST_AUTH:`/api/auth`,


/**
 * make
 */

 API_GET_MAKE:`/api/make`,
 API_POST_MAKE:`/api/make`,
})

