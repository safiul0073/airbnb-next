
"use client"

import { TextInputPropsType } from "../../../types";


const TextInput = ({
type,
placeholder,
classInput,
classGroup,
register,
name,
error
}: TextInputPropsType) => {

return (
    <>
        <div className={`my-2 ${classGroup}`}>
            {
                name && (
                    <input
                        type={type}
                        {...register(name)}
                        className={`${error ? " has-error" : " "
                            } form-control  ${classInput}`}
                        placeholder={placeholder}
                    />
                )
            }
        {/* error message showing if has */}
            {
                error && <div className="error-message"> {error.message}</div>
            }
        </div>
    </>);
};

export default TextInput;