class ApiService {
    getApiUrl() {
        
        return Cypress.env('apiUrl'); 
    }

    // Kreiranje Posta (CREATE)
    createPost(title, body, userId) {
        const url = `${this.getApiUrl()}/posts`;
        return cy.request({
            method: 'POST',
            url: url, 
            body: { 
                title: title, 
                body: body,
                userId: userId 
            }
        });
    }

    // READ
    getPost(postId) {
        const url = `${this.getApiUrl()}/posts/${postId}`;
        return cy.request({
            method: 'GET',
            url: url, 
        });
    }

    // UPDATE
   updatePost(postId, title, body, userId) {
    const url = `${this.getApiUrl()}/posts/${postId}`;
    return cy.request({
        method: 'PATCH',
        url: url,
        body: { 
            id: postId, 
            title: title, 
            body: body,
            userId: userId 
        }
    });
}

    // DELETE
    deletePost(postId) {
        const url = `${this.getApiUrl()}/posts/${postId}`;
        return cy.request({
            method: 'DELETE',
            url: url,
        });
    }
}

export default new ApiService();