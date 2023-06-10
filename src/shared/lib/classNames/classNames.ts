export type ClassnamesMods = { [key: string]: boolean | undefined }

export function classNames(
  ...params: (undefined | string | ClassnamesMods)[]
): string {
  const classes: string[] = [];

  params.forEach((param) => {
    if (typeof param === 'string') {
      classes.push(param);
    }
    if (typeof param === 'object' && param !== null) {
      const modClasses = Object.entries(param)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className);

      classes.push(...modClasses);
    }
  });

  return classes.join(' ');
}
