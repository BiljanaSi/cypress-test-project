import ApiService from '../../services/ApiService'; 

describe('JSONPlaceholder Full CRUD Cycle Testing (Posts)', () => {
    
    // Variable to store the ID of the dynamically created resource
    let createdPostId;
    const initialTitle = 'Cypress API Test Post';
    const initialBody = 'This is the body of the post created for testing.';
    const testUserId = 1; 

    // 1. CREATE Test (POST)
    it('TC_CRUD_01: Should successfully CREATE a new post (POST)', () => {
        ApiService.createPost(initialTitle, initialBody, testUserId).then(response => {
            // Assertion 1: Expect Status Code 201 for resource creation
            expect(response.status).to.eq(201); 
            
            // Assertion 2: Verify that the sent data is correctly reflected
            expect(response.body).to.have.property('title').to.eq(initialTitle);
            
            // Store the generated ID for the subsequent tests
            createdPostId = response.body.id;
            cy.log(`✅ Created Post ID: ${createdPostId}`);
        });
    });

    // 2. READ Test (GET) - Fetching an existing, known resource
    it('TC_CRUD_02: Should successfully READ a known post (GET /posts/1)', () => {
        // We use ID 1 as it is guaranteed to exist on JSONPlaceholder
        ApiService.getPost(1).then(response => {
            // Assertion 1: Expect Status Code 200
            expect(response.status).to.eq(200);
            
            // Assertion 2: Verify the basic structure and known ID
            expect(response.body).to.have.property('id').to.eq(1);
            expect(response.body).to.have.property('title').to.be.a('string');
        });
    });

    // 3. UPDATE Test (PATCH)
    // We use PATCH instead of PUT due to known instability of JSONPlaceholder 
    // for PUT operations on dynamically created IDs (>100), which resulted in 500 errors.
    it('TC_CRUD_03: Should successfully UPDATE the created post (PATCH)', () => {
        const updatedTitle = 'Cypress Post Title Updated (via PATCH)';
        const updatedBody = 'The content has been modified.';

        if (!createdPostId) {
            cy.fail('CREATE test failed, skipping UPDATE.');
            return;
        }

        ApiService.updatePost(createdPostId, updatedTitle, updatedBody, testUserId).then(response => {
            // Assertion 1: Expect Status Code 200 for successful update (PATCH)
            expect(response.status).to.eq(200);
            
            // Assertion 2: Verify that the fields were updated correctly
            expect(response.body.title).to.eq(updatedTitle);
            expect(response.body.body).to.eq(updatedBody);
            
            // Assertion 3: Verify the ID is still correct
            expect(response.body).to.have.property('id').to.eq(createdPostId);
        });
    });

    // 4. DELETE Test (DELETE)
    it('TC_CRUD_04: Should successfully DELETE the created post (DELETE)', () => {
        if (!createdPostId) {
            cy.fail('CREATE test failed, skipping DELETE.');
            return;
        }

        // Deleting the resource
        ApiService.deletePost(createdPostId).then(response => {
            // Assertion 1: JSONPlaceholder returns 200 OK for DELETE
            expect(response.status).to.eq(200); 
            
            // Assertion 2: The response body should be empty (or {})
            expect(response.body).to.be.empty; 
        });
    });

    // 5. Verification Test (GET after DELETE) - Negative scenario
    it('TC_CRUD_05: Should confirm post is deleted by attempting to READ (GET /404)', () => {
        if (!createdPostId) return cy.log('Skipping validation: Post ID not available.');

        // We expect a 404 (Not Found) after deletion, so we must use failOnStatusCode: false
        cy.request({
            method: 'GET',
            url: `/posts/${createdPostId}`,
            failOnStatusCode: false 
        }).then(response => {
            // Assertion: Expect Status Code 404
            expect(response.status).to.eq(404);
        });
    });

});