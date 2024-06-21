

1.
<!-- nav -->
outlet---|2.
         |-overview
         |-Account Holders---|3.
                     <!-- sub nav -->
                     outlet{         4.
         |           |-add    Member-->details->contract
         |           |-Member bio---|
         |                          |---edit
         |                          |---deactivate ---- confirmation 
         |           }
                         <!-- sub nav -->
         |-transactions----> transfer
         |                 |--deposit
         |                 |--withdraw
         |-admin details





member = {
   bank id
   name
   surname
   join date
   isActive
   image
   address{
      street
      city
      country
   }
   account{
      cash
      credit
   }
}