
export const getData = ({ data, language }) => {
    return data[language] ? data[language] : data['es']; // Spanish default
}