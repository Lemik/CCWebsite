import React from 'react';
import TextInput from '../common/TextInput';


const MintForm = ({mint, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Mints</h1>
      <TextInput name="id"          label="id" value={mint.id} onChange={onChange} error={errors.id}/>
      <TextInput name="value"       label="value" value={mint.value} onChange={onChange} error={errors.value}/>
      <TextInput name="description" label="description" value={mint.description} onChange={onChange} error={errors.description}/>
//TODO change country to   Select from Canada and US for now
      <TextInput name="country"     label="country" value={mint.country} onChange={onChange} error={errors.country}/>


      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

MintForm.propTypes = {
  mint: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default MintForm;
