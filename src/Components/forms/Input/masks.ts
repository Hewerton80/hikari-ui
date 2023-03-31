export const onlyNumbersMask = (value: string) => {
  return value.replace(/\D/g, "");
};

export const inputMasks = {
  cpf: {
    apply: (value: string) => {
      return onlyNumbersMask(value)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    },
    placeholder: "___.___.___-__",
  },
  cnpj: {
    apply: (value: string) => {
      return onlyNumbersMask(value)
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    },
    placeholder: "__.___.___/____-__",
  },
  cep: {
    apply: (value: string) => {
      return onlyNumbersMask(value)
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");
    },
    placeholder: "_____-___",
  },
  phone: {
    apply: (value: string) => {
      return onlyNumbersMask(value)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    },
    placeholder: "(__) _____-____",
  },
  // "currency(PT-BR)": {
  //   apply: (value: string) => {
  //     let returnValue: number | string = Number(onlyNumbersMask(value)) / 100;
  //     returnValue = new Intl.NumberFormat("pt-BR", {
  //       style: "currency",
  //       currency: "BRL",
  //     }).format(returnValue);
  //     return String(returnValue);
  //   },
  //   placeholder: "R$ 0,00",
  // },
};
