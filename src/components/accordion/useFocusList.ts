import { useState, useCallback, useMemo } from "react"

export const useFocusList = () => {
  const [focusList, setFocusList] = useState<any[]>([])

  const onFocus = useCallback((key: any) => {
    setFocusList([key, ...focusList])
  }, [focusList])
  const onBlur = useCallback((key: any) => {
    setFocusList(focusList.filter(section => section !== key))
  }, [focusList])
  
  const isFocused = useMemo(() => focusList.length > 0, [focusList])

  return {
    onFocus,
    onBlur,
    isFocused,
  }
}