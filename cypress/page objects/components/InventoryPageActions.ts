export class InventoryPageActions {
    
  
    public getInventoryPageHome() {
        return cy.location('pathname', { timeout: 10000 }).should('include', '/v1/inventory.html');
        
      }
  
      
    
      
    }