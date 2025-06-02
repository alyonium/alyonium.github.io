export const getYears = (startDate: string) => {
    const today = new Date();
    const date = new Date(startDate);

    const age = today.getFullYear() - date.getFullYear();

    const hasHadThisYear = (
        today.getMonth() > date.getMonth() ||
        (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate())
    );

    return hasHadThisYear ? age : age - 1;
}