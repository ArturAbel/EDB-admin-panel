const nameRegex = /^[a-z ,.'-]+$/i;

export const validateName = (name) => {
  return nameRegex.test(name);
};

export const unableButton = (member, validName, validSurname) => {
  if (
    member.name !== undefined &&
    member.name.length > 0 &&
    validName &&
    member.surname !== undefined &&
    member.surname.length > 0 &&
    validSurname &&
    member.image !== undefined &&
    member.image.length > 0 &&
    member.street !== undefined &&
    member.street.length > 0 &&
    member.city !== undefined &&
    member.city.length > 0 &&
    member.country !== undefined &&
    member.country.length > 0 &&
    member.overdraft !== undefined &&
    member.overdraft.length > 0
  ) {
    return true;
  }
};
