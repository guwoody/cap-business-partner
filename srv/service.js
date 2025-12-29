const cds = require('@sap/cds');

module.exports = async (srv) => {
    const remote = await cds.connect.to('API_BUSINESS_PARTNER');

    srv.on('READ', 'BusinessPartner', async (req) => {
        return remote.run(req.query);
    })
}