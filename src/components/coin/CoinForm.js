import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CoinForm = ({coin, allNominals, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Coins</h1>
      <TextInput
        name="title"
        label="Title"
        value={coin.title}
        onChange={onChange}
        error={coin.title}/>
        <SelectInput
          name="nominal"
          label="Nominal"
          value={coin.nominal}
          defaultOption="Select Nominal"
          options={allNominals}
          onChange={onChange} error={errors.nominal}/>
        <TextInput
          name="year"
          label="Year"
          value={coin.year}
          onChange={onChange}
          error={coin.year}/>
        <TextInput
          name="mint"
          label="Mint"
          value={coin.mint}
          onChange={onChange}
          error={errors.mint}/>

      <TextInput
        name="description"
        label="Description"
        value={coin.description}
        onChange={onChange}
        error={errors.description}/>
      <TextInput
        name="imgA"
        label="ImgA"
        value={coin.imgA}
        onChange={onChange}
        error={errors.imgA}/>
      <TextInput
          name="imgB"
          label="ImgB"
          value={coin.imgB}
          onChange={onChange}
          error={errors.imgB}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CoinForm.propTypes = {
  coin: React.PropTypes.object.isRequired,
  allNominals: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CoinForm;
