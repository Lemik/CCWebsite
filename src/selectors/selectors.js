export function nominalFormattedForDropdown(nominal) {
  return nominal.map(nominal => {
    return {
      value: nominal.id,
      //text: nominal.firstName + ' ' + nominal.lastName
      text: nominal.value
    };
  });
}
