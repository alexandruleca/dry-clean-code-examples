import ButtonAtom from "@/components/atom/button";

export default function FormMolecule({children, onSubmit = () => {}, buttonLabel = '', ...otherProps}) {
    return (
        <div {...otherProps}>
            {children}
            <div>
                <ButtonAtom
                    label={buttonLabel || 'Send Data'}
                    style={{
                        marginTop: 16,
                    }}
                    onClick={onSubmit}
                    fullWidth
                />
            </div>
        </div>
    );
}