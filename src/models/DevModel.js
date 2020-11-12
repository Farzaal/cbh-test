function DevModel({ db }) {

  this.createDev = async function createDev(email, firstName, middleNames, lastName) {
    const obj = [email, firstName, middleNames, lastName];
    const _query = `INSERT INTO developer (email, first_name, middle_names, last_name) VALUES($1,$2,$3,$4) RETURNING id`;
    return await db.primary.query(_query, obj);
  }

  this.getDev = async function getDev(id) {
      const _query = `SELECT * FROM developer where id=${id}`;
      return await db.primary.query(_query);
  }
}

module.exports = DevModel;
