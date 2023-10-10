export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/ShuklaAbhishek99");
    return response.json();
};