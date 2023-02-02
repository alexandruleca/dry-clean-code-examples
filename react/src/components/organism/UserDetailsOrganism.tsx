import {useForm} from "@/components/molecule/useForm";
import InputAtom from "@/components/atom/input";
import FormMolecule from "@/components/molecule/form";

export default function UserDetailsOrganism() {
    const {formData, handleFormDataChange} = useForm();

    const commonInputStyles = {
        background: '#FFF',
        paddingLeft: 16,
    }

    return (
        <FormMolecule
            onSubmit={() => {
                console.log(formData)
            }}
        >
            <InputAtom
                type={'text'}
                placeholder={'First Name'}
                style={{
                    marginRight: 16,
                    ...commonInputStyles,
                }}
                onChange={(e) => {handleFormDataChange('first_name', e.target.value)}}
            />
            <InputAtom
                type={'text'}
                placeholder={'Last Name'}
                style={{
                    ...commonInputStyles,
                }}
                onChange={(e) => {handleFormDataChange('last_name', e.target.value)}}
            />
        </FormMolecule>
    );
}