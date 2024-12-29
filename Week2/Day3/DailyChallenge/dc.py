# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

from functools import total_ordering


@total_ordering 
# total ordering allows to use all compare functions
class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def diameter(self):
        return self.radius * 2
    
    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)
    
    def __lt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Comparisons can only be made between Circle instances.")
        return self.radius < other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Comparisons can only be made between Circle instances.")
        return self.radius == other.radius

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}"
    
    def __repr__(self):
        return f"Circle(radius={self.radius})"
# Example usage
if __name__ == "__main__":
    circle1 = Circle(radius=5)
    circle2 = Circle(diameter=20)

    print(circle1)
    print(circle2)
    print(circle1 > circle2)  # False
    print(circle1 <= circle2)  # True
    print(circle1 != circle2)  # True

    circles = []
    circles.append(circle1)
    circles.append(circle2)
    circles.append(Circle(radius=2))
    print(circles)
    circles.sort()
    print(circles)