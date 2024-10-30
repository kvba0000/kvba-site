export const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();

    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;

    return age;
}

export const normalizeString = (str: string): string => {
    return str.replace(/[-_.]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/(?:\s|^)[a-z]/g, (s) => s.toUpperCase())
}

export const normalizeLink = (link: string): string => {
    return link.replace(/(?:^.*:(?:\/\/)?)?(?:www\.)?/, "")
}