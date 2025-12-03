class ApiService {
    // NEMA BASE URL-a ovde!

    // Kreiranje Posta (CREATE)
    createPost(title, body, userId) {
        return cy.request({
            method: 'POST',
            url: `/posts`, 
            body: { 
                title: title, 
                body: body,
                userId: userId // JSONPlaceholder zahteva userId
            }
        });
    }

    // READ
    getPost(postId) {
        return cy.request({
            method: 'GET',
            url: `/posts/${postId}`, 
        });
    }

    // UPDATE
   updatePost(postId, title, body, userId) {
    return cy.request({
        method: 'PATCH',
        url: `/posts/${postId}`,
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
        return cy.request({
            method: 'DELETE',
            url: `/posts/${postId}`,
        });
    }
}

export default new ApiService();