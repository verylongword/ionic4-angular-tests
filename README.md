# ionic4-angular-tests
ionic4/angular typescript samples

Demonstrate a navigation issue:
1)   Build testTabs2:    ionic build --engine=browser --serviceWorker=true
2)   run testTabs2:    cd www
                       serve
3)   test navigation:
    (home.page -> usage.page -> payments.page -> usage.page ->payments.page FAILS:
    page is stuck on usage.page, except that the back-button still works)
