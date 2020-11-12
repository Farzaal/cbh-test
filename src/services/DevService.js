function DevService({ devModel }) {

  this.getDev = async function getDev(id) {
    return devModel.getDev(id);
  }

  this.createDev = async function createDev({ email, firstName, middleNames, lastName }) {
    const { fName, mNames, lName } = sanitizeNames(
      firstName,
      middleNames,
      lastName
    );

    return devModel.createDev(email, fName, mNames, lName);
  }

  const sanitizeNames = function sanitizeNames(firstName, middleNameStr, lastName) {
    let [sanitizedFirstName, ...mNames] = firstName.trim().split(' ');
    if (middleNameStr) {
      mNames = mNames.concat(middleNameStr.split(' '));
    }
    const sanitizedMiddleNames = mNames.filter((n) => n);
    const sanitizedMiddleName = sanitizedMiddleNames.length
      ? sanitizedMiddleNames.join(' ')
      : null;
    const sanitizedLastName = lastName.trim();

    return {
      fName: sanitizedFirstName,
      mNames: sanitizedMiddleName,
      lName: sanitizedLastName,
    };
  }
}

module.exports = DevService;
