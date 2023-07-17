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
    placeholder: "xxx.xxx.xxx-xx",
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
    placeholder: "xx.xxx.xxx/xxxx-xx",
  },
  cep: {
    apply: (value: string) => {
      return onlyNumbersMask(value)
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");
    },
    placeholder: "xxxxx-xxx",
  },
  phone: {
    apply: (value: string) => {
      return onlyNumbersMask(value)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    },
    placeholder: "(xx) xxxxx-xxxx",
  },
  creditCard: {
    apply: (value: string) => {
      return onlyNumbersMask(value)
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})\d+?$/, "$1");
    },
    placeholder: "xxxx xxxx xxxx xxxx",
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
  //   placeholder: "R$ 0,00",
  // },
};
