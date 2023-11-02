export const formikSerializeFields = (fields, formnikObject) => {
    return fields.map((field) => {
        field.value = formnikObject.values[field.name]
        field.error = formnikObject.errors[field.name]
        field.touched = formnikObject.touched[field.name]
        field.onChange = formnikObject.handleChange;
        return field;
    })
}
