const xswitch = (...cases) => (...switchParams) =>
  cases.find(({ xcase }) => xcase(...switchParams))?.return(...switchParams);

export { xswitch };
export default xswitch;
