import { ReactNode } from "react";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "../ui/form-control";
import { AlertCircleIcon } from "../ui/icon";

interface FormControlProps {
    children: ReactNode
    label?: string
    helper?: string
    error?: string
}

export default function StyledFormControl({ children, label, helper, error }: FormControlProps) {
    return (
        <FormControl>
            <FormControlLabel>
                <FormControlLabelText>{label}</FormControlLabelText>
            </FormControlLabel>
            {children}
            {
                helper &&
                <FormControlHelper>
                    <FormControlHelperText>
                        {helper}
                    </FormControlHelperText>
                </FormControlHelper>
            }
            {
                error &&
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                        Atleast 6 characters are required.
                    </FormControlErrorText>
                </FormControlError>
            }
        </FormControl>
    )
}