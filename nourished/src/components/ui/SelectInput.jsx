const SelectInput = ({
  name,
  option,
  handleChange,
  value,
  addOption,
  isloading,
}) => {
  const [options] = option;
  return (
    <select
      name={name}
      required
      onChange={handleChange}
      value={value}
      disabled={isloading}
      className="bg-gray-50 py-3 px-5 shadow-sm shadow-blue-200 outline-none rounded-md focus:shadow-lg text-gray-400 ">
      {addOption && <option value="">Select the Category</option>}
      <option value={options.option1}>{options.option1}</option>
      <option value={options.option2}>{options.option2}</option>
      <option value={options.option3}>{options.option3}</option>
    </select>
  );
};

export default SelectInput;
