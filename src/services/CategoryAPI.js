const url = "http://localhost:8080/api/categories";

async function handleResponse(response) {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
    if (response.status === 204) {
        return;
    }
    return await response.json();
}

async function createCategoryAPI(categoryName) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ categoryName: categoryName }),
        });
        return await handleResponse(response);
    } catch (error) {
        throw error;
    }
}

async function getCategoriesAPI() {
    try {
        const response = await fetch(url);
        return await handleResponse(response);
    } catch (error) {
        throw error;
    }
}

async function getCategoryAPI(categoryId) {
    try {
        const response = await fetch(`${url}/${categoryId}`);
        return await handleResponse(response);
    } catch (error) {
        throw error;
    }
}

async function updateCategoryAPI(category) {
    try {
        const response = await fetch(`${url}/${category.categoryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        });
        return await handleResponse(response); 
    } catch (error) {
        throw error;
    }
}

async function deleteCategoryAPI(categoryId) {
    try {
        const response = await fetch(`${url}/${categoryId}`, {
            method: "DELETE",
        });
        return await handleResponse(response);
    } catch {
        throw error;
    }
}

export { createCategoryAPI, getCategoriesAPI, getCategoryAPI, updateCategoryAPI, deleteCategoryAPI };