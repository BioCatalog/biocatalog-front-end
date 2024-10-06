import { StyleSheet } from "react-native";
import { Input, InputField } from "../ui/input";
import { VStack } from "../ui/vstack";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "../ui/select";
import { ChevronDownIcon } from "../ui/icon";
import { Textarea, TextareaInput } from "../ui/textarea";
import StyledLabel from "./label";

interface StyledInputProps {
    label?: string
    placeholder?: string
    onChangeText?: (text: string) => void
    type: 'text' | 'password' | 'select-options' | 'text-area'
    options?: Array<{name: string, id: string}> 
    defaultValue?: string
    isRead?: boolean
}

export default function StyledInput({ label, placeholder, type, options, onChangeText, defaultValue, isRead }: StyledInputProps) {
    return (
        <VStack space="xs">
            {label && <StyledLabel text={label} />}
            {
                ['text', 'password'].includes(type) ?

                    <Input isReadOnly={isRead} style={[styles.input]}>
                        <InputField 
                        type={(type == 'text' || type == 'password') ? type : 'text'} 
                        placeholder={placeholder} 
                        defaultValue={defaultValue ?? defaultValue} 
                        onChangeText={onChangeText} />
                    </Input>

                    :

                    type == 'select-options' ?
                        <Select>
                            <SelectTrigger variant="outline" size="md" style={{justifyContent: 'space-between'}}>
                                <SelectInput placeholder={placeholder} onChangeText={onChangeText} />
                                <SelectIcon className="mr-3" as={ChevronDownIcon} />
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent>
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator />
                                    </SelectDragIndicatorWrapper>

                                    {
                                        options?.map((option) => (
                                            <SelectItem key={option.id} label={option.name} value={option.id} />
                                        ))
                                    }
                                </SelectContent>
                            </SelectPortal>
                        </Select>

                        :

                        <Textarea size="md">
                            <TextareaInput onChangeText={onChangeText} placeholder={placeholder} />
                        </Textarea>
            }
        </VStack>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 6
    },
})