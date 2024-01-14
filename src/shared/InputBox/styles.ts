const styles = {
  inputBox: {
    label: 'font-medium',
    forgotPassword: 'ml-auto text-base text-primary',
    inputFieldClass: (inputClass?: string, errorMessage?: string) =>
      `${inputClass} mt-1 w-full rounded p-3 outline-none border border-neutral-300 ${
        errorMessage ? 'border-[1.5px] border-red-400' : ''
      } placeholder-slate-400`,
    inputEye: 'absolute right-0 top-5 mr-4 cursor-pointer',
    errorMessage: 'text-right text-xs text-red-400',
    defaultText: 'text-right text-[10px] text-white',
  },
  textArea: {
    textAreaClass: (inputClass?: string, errorMessage?: string) =>
      `${inputClass} mt-1 w-full resize-none rounded p-2 outline-none ${
        errorMessage ? 'border-[1.5px] border-red-400' : 'border border-neutral-300'
      }`,
    textAreaErrorMessage: 'mt-[-6px] text-right text-xs text-red-400',
    defaultText: 'text-right text-[10px] text-white',
  },
};

export default styles;
