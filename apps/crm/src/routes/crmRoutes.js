import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    // GET All contacts endpoint
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    // POST endpoint
    .post(addNewContact);

  app.route('/contact/:contactId')
    // Get specific contact
    .get(getContactWithId)
    // PUT request
    .put(updateContact)
    // DELETE request
    .delete(deleteContact);
};

export default routes;
