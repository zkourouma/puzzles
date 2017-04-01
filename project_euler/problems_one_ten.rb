#problem one
def problem_one
  sum = 0
  for i in 1..1000
    if i%3 == 0
      sum+=i
    elsif i%5 == 0
      sum+=i
    end
  end
  sum
end


#problem two
def problem_two(cap=4000000)
  sum = 2
  a = 1
  b = 2
  while a + b < cap
    c = a + b
	  if c%2 == 0
	    sum+= c
    end
    a = b
    b = c
  end
  sum
end


#problem three
def problem_three(parent=600851475143)
  require 'prime'
  a = parent
  b = 2
  check = false
  while check == false
    a = parent / b
    if parent%a == 0
      Prime.prime?(a) ? check = true : nil
    end
    b+=1
  end
  a
end

puts problem_three



#problem four
def problem_four
  pal = 0
  for y in 500...1000
    500.upto(999){|x| ((x*y).to_s == (x*y).to_s.reverse ? pal= [pal,(x*y)].max : next)}
  end
  pal
end


#problem five
def problem_five
  smll = 2520
  check = false
  until check == true
    check_too = true
    for x in 1..20
      (smll)%x == 0 ? next : check_too = false
    end
    check_too == true ? check = true : smll+=2
  end
  smll
end

#problem six
def problem_six
  squares = 0
  sums = 0
  for x in 1..100
    squares+= x**2
    sums+=x
  end
  sums*=sums
  sums - squares
end


#problem seven
def problem_seven(limit=10001)
  require 'prime'
  
  primeList = [2,3,5,7,11,13]
  primal = 17
  until primeList.length == limit
    Prime.prime?(primal) ? primeList<<primal : nil
    primal+=2
  end
  primeList[-1]
end


#problem eight
def problem_eight(digit_num = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450)
  limit = digit_num.to_s.length
  maxProd = 1
  0.upto(limit){|x| splice = (digit_num.to_s)[x,5]
    miniProd = 1
    for y in 0..5
      miniProd*= (splice[y].to_i)
      maxProd = [maxProd,miniProd].max
    end}
    maxProd
end


#problem nine
def problem_nine
  2.upto(500){|y| 2.upto(500){|x| if Math.sqrt(x**2 + y**2)%1 == 0 and x + y + Math.sqrt(x**2 + y**2) == 1000
      return x*y*(Math.sqrt(x**2 + y**2))
    end}}
end

#problem ten
def problem_ten(limit=2000000)
  require 'prime'
  summation = 2
  last = 3
  while last < limit
    Prime.prime?(last) ? summation+=last : nil
    last+=2
  end
  summation
end