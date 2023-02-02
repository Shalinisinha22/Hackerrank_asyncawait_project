module.exports={
    answers:[`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    
    int solveMeFirst(int a, int b) {
     
      return a+b;
    }
    
    int main() {
      int num1, num2;
      int sum;
      cin>>num1>>num2;
      sum = solveMeFirst(num1,num2);
      cout<<sum;
      return 0;
    }`,


    `
    #include <bits/stdc++.h>
    using namespace std;
    
    int main(){
       int number_of_elements;
       cin>>number_of_elements;
       vector <int> array(number_of_elements);
       int sum_of_array=0;
    
       for(int i=0;i<number_of_elements;i++){
             cin>>array[i];
           sum_of_array+=array[i];
        }
      cout<<sum_of_array;
      return 0;
    
      }
      `,

      `
      #include <cmath>
      #include <cstdio>
      #include <cstdlib>
      #include <iostream>
     
      using namespace std;
      
      int main()
      {
          int a0;
          int a1;
          int a2;
          cin >> a0 >> a1 >> a2;
          int b0;
          int b1;
          int b2;
          cin >> b0 >> b1 >> b2;
          int a=0,b=0;
          if(a0>b0)
              a++;
          if(a0<b0)
              b++;
          if(a1>b1)
              a++;
          if(a1<b1)
              b++;
          if(a2>b2)
               a++;
          if(a2<b2)
              b++;
          cout<<a<<" "<<b;
          return 0;
      }
      
      `,  
   
      
     `
      #include <cmath>
      #include <cstdio>
      #include <vector>
      #include <iostream>
      #include <algorithm>
      using namespace std;
      
      int main()
      {
      int n;
      long long int sum=0;
      
      cin >> n;
      
      vector<int> arr(n);
      
      for(int arr_i = 0;arr_i < n;arr_i++)
      {
      cin >> arr[arr_i];
      sum+=arr[arr_i];
      }
      
      cout<<sum;
      return 0;
      
      }`,



        `#include <math.h>
        #include <stdio.h>
        #include <string.h>
        #include <stdlib.h>
        #include <assert.h>
        #include <limits.h>
        #include <stdbool.h>
        int main()
        {
         
            int n, j;
            int i=0,RightDiagonalSum=0,LeftDiagonalSum=0, firstarray, secondarray;
            
         scanf("%d",&n);
            int a[n][n];
            
         for(int firstarray = 0; firstarray < n; firstarray++)
         {
               for(int secondarray = 0; secondarray < n; secondarray++)
            {
                 
                  scanf("%d",&a[firstarray][secondarray]);
               }
            }
         
          while(i<n)
          {
            RightDiagonalSum=RightDiagonalSum+a[i][i];
            i++;
          }
            
         j=n-1,i=0;
            
          while(i<n)
          {
            LeftDiagonalSum=LeftDiagonalSum+a[i][j];
            i++;
            j--;
          }
            
         printf("%d",abs(RightDiagonalSum-LeftDiagonalSum));
            return 0;
        }`,
            
            `#include <bits/stdc++.h>
            using namespace std;
            
            int main()
             {
                int n,c1=0,c2=0,c3=0;
                cin >> n;
                
             vector<int> arr(n);
                
             for(int arr_i = 0;arr_i < n;arr_i++)
             {
                   cin >> arr[arr_i];
                    
             if(arr[arr_i]>0)
                    {
                     c1++;
             }    
                    if(arr[arr_i]<0)
                    {
                     c2++;
                 }
                    if(arr[arr_i]==0)
                    {
                     c3++;
                    }
                    cout<<setprecision(6)<<(float)c1/n<<endl;
                    cout<<setprecision(6)<<(float)c2/n<<endl;
                    cout<<setprecision(6)<<(float)c3/n<<endl;
                return 0;
            }
            
            
            `
     ]
  }
  