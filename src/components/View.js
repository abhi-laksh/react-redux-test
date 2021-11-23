import React from 'react'
import { useSelector } from 'react-redux'

const View = ({
    data = {}
}) => {

    const form = useSelector(state => state.form)

    console.log(form, "form")

    return (
        <div>
            {
                form
                && form.Form
                && !(form.Form.syncErrors || form.Form.syncError)
                && form.Form.values
                && form.Form.values.day
                && form.Form.values.month
                && form.Form.values.year
                && `Submitted date in redux ${form.Form.values.day}/${form.Form.values.month}/${form.Form.values.year}`
            }
            <br/>
            {
                data.day
                && data.month
                && data.year
                && `Submitted date on button click ${data.day}/${data.month}/${data.year}`
            }
        </div>
    )
}

export default View
