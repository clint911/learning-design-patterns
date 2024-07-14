/** 
 * Factory Method: provides an interface or abstract class for creating objects in a super class but allows subclasses to alter the type of objects that will be created
 */
/** 
 *     @CaseStudy: 
        You are a startup on the logistics management application team. The first version of your app can only handle the most common mode of logistics transport, by trucks. So the bulk of your code lives inside the Truck class.
After a while, your product becomes popular & you start receiving dozens of requests from sea transportation companies to incorporate sea logistics into the app.
Great news but at present most of your code is in the Truck class, adding ships into the app would require making changes to the entire codebase. Moreover, if you decide to add another mode you'll have to do another rewrite which can lead to the app having inconsistent user experience.

    SOLUTION:
This Pattern suggests replacing direct object construction calls(using the new operator) with calls to a special factory method. The objects are still created via the new operator, but it's being called from within the factory method. Objects returned by a factory method are often referred to as products.

 At first glance, this change may look pointless: we just moved the constructor call from one part of the program to another. However, consider this: now you can override the factory method in a subclass and change the class of products being created by the method.

There’s a slight limitation though: subclasses may return different types of products only if these products have a common base class or interface. Also, the factory method in the base class should have its return type declared as this interface.
 **/
/*---------------------------------------------------------------------------------------**/
/** 
 *        @Implementation: 
 * A Sample Product class declares an interface or abstract class, common to all objects that can be produced by the creator & its subclasses. 
 * Concrete Products are different implementations of the product interface 
 * Creator Class declares the Factory method that returns new product objects that matched the product interface or abstract class 
 * You can declare the factory method as abstract & force all subclasses to implement their own versions of the method or alternatively have it resolve a default sane product type
 * It's crucial to note that product creation is not the primary responsibility of the creator & it ussually contains some core business logic related to products, the factory method helps decouple this logic from the concrete product classes. 
 *  Recall, Concrete Creators override the base factory method so it returns a different product type 
 */

/**---------------------------------------------------------------------------------------*//** Conceptual Example **/

