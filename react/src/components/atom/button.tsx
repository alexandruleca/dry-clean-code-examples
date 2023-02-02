export default function ButtonAtom ({label, style = {}, fullWidth = false, ...otherProps}) {
    const buttonStyles: any = {
        height: 48,
        ...style
    };
    if (fullWidth) buttonStyles.width = '100%';
    return (
        <button
            style={buttonStyles}
            {...otherProps}
        >
            {label}
        </button>
    )
}