export default function InputAtom({onChange = (e) => {}, type, placeholder, style = {}, ...otherProps}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            style={{
                color: '#000',
                width: 250,
                height: 48,
                background: '#888',
                ...style
            }}
            onChange={onChange}
            {...otherProps} />
    );
}