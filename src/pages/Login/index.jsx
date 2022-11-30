

function Login() {
    return (
        <div class="flex justify-center">
  <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
    <div class="py-3 px-6 border-b border-gray-300">
      Login
    </div>
    <div class="p-6">
      <div class="flex justify-center">
  <div>
    <div class="form-floating mb-3 xl:w-96">
      <label for="floatingInput" class="text-gray-700">Email address</label>
      <input type="email" class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com"/>
    </div>
    <div class="form-floating mb-3 xl:w-96">
      <label for="floatingPassword" class="text-gray-700">Password</label>
      <input type="password" class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password"/>
      
    </div>
  </div>
</div>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
      <a href="#!" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out">Signup</a>
    </div>
  </div>
</div>
    );
  }
  
  export default Login;